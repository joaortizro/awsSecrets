import { SecretsManagerClient, CreateSecretCommand, UpdateSecretCommand ,GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

import { fromIni } from "@aws-sdk/credential-providers";


const REGION = 'us-east-1'

const secretNamePersonal = "arn:aws:secretsmanager:us-east-1:131218284330:secret:test-nnK9Az"

const params = {
    SecretId: secretNamePersonal
}

const secretsClient = new SecretsManagerClient(
    { 
    region: REGION,
    credentials:fromIni({profile:'personal'}) 
    }
)

const create = async (jsonObject) => {
    try{
        const response = await secretsClient.send(new CreateSecretCommand({
            Name:secretNamePersonal,
            SecretString: '{"hola":"chao"}',
            //ForceOverwriteReplicaSecret:true
        }))
        console.log(response)
    }catch(err){
        console.log(err)
    }
}

const update = async (jsonObject) => {
    try{
        const response = await secretsClient.send(new UpdateSecretCommand({
            SecretId:secretNamePersonal,
            SecretString: JSON.stringify(jsonObject)
        }))
        console.log(response)
    }catch(err){
        console.log(err)
    }
}


let jsonSecret = {
    hola:'mundo',
    chao:'mundo',
    idk:{
        another:'one'
    }
}
//create(jsonSecret)
update(jsonSecret)
// const run = async () => {
//     let data;
//     try {
//         data = await secretsClient.send(new GetSecretValueCommand(params));
//         console.log("data", data);
//         return data; // For unit tests.
//     } catch (err) {
//         console.log("err", err);
//     }
//     let secret;
//     if ("SecretString" in data) {
//         secret = data.SecretString;
//     } else {
//         console.log("else:", data);

//         // Create a buffer
//         const buff = new Buffer(data.SecretBinary, "base64");
//         secret = buff.toString("ascii");
//     }
//     return secret;
// };

// run();