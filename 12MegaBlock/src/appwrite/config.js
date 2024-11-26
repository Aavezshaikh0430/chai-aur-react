import conf from '../conf/conf';
import {Client, ID, Databases, Storage, Query} from 'appwrite'

export class Service {
    client = new Client();
    databases;
    buket;

    constructor(){
        this.client
        .setEndpoint(conf.appwirteUrl)
        .setProject(conf.appwiteProjectId);
        this.databases = new Databases(this.client);
        this.buket = new Storage (this.client);
    }

    async createPost ({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log('Appwrite service :: createPost :: error', error);
            
        }

    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log('Appwrite service :: updatePost :: error', error);
            
        }

    }

    async delectPost(slug){
            try {
                await this.databases.delectPost(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )
                return true
            } catch (error) {
                console.log('Appwrite service :: delectPost :: error', error);
                return false
  
            }
    }

    async getPost (slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log('Appwrite service :: getPost :: error', error);
            return false;
        }
    }

    //wo value chahiye jin ka status active hai. 
    //getposts(sare post mujhe do jis ke under qury hai. jin ka status active hai.)
    async getPosts(quries = [Query.equal('status' , 'active')]){
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    // [   
                    //     //quries.equal('status', 'active')
                    //parameter ki jagaha ham sirf quries bhi likh sakte hai.
                    // ]
                    quries,
                )
            } catch (error) {
                console.log('Appwrite service :: getPosts :: error', error);
                return false 
            }
    }

    //file upload service.

    async uploadFile(file){
        try {
            return await this.buket.createFile(
                conf.appwriteBuketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log('Appwrite service :: uploadFile :: error', error);
            return false;
        }
    }

    async delectFile(fileId){
        try {
                await this.buket.deleteFile(
                conf.appwriteBuketId,
                fileId
            )
            return true
    
        } catch (error) {
            console.log('Appwrite service :: delectFile :: error', error);
            return false
        }
    }

    getFilePreview (fileId){
        return this.buket.appwriteBuketId,
        fileId
    }
}

const service = new Service()
export default service;