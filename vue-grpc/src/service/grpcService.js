import Vue from "vue";
import { SignerClient } from "../protos/tutorial_grpc_web_pb"
//import {PersonRequest} from "../protos/tutorial_pb.js"
import store, { APP_GETTERS, APP_MUTATIONS } from '@/store'

export const grpcService = new Vue({
    methods: {
        createClient(url, port) {
            try {
                let grpcClient = store.getters[APP_GETTERS.GRPC_CLIENT]
                
                if(!grpcClient) {
                    grpcClient = new SignerClient(`${url}:${port}`, null, null);
                    console.log('grpcClient, lo intentamos meter en store')
                    console.log(grpcClient)
                    store.commit(APP_MUTATIONS.GRPC_CLIENT, grpcClient);
                } else {
                    console.log('ya existe grpcClient')
                    console.log(grpcClient)
                }

            } catch (err) {
                console.error(err);
            }
        },
        async signPerson(request) {
            return new Promise ((resolve, reject) => {
                let grpcClient = store.getters[APP_GETTERS.GRPC_CLIENT]
                grpcClient.signPerson(request, {}, (err, response) => {
                if(err) {
                    reject(err)
                } else {
                    console.log(response);
                    resolve(response['array']);
                }
                
            })
            })
            


        }
    }
})