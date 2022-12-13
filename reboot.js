import { EC2Client, RebootInstancesCommand } from "@aws-sdk/client-ec2";
import { fromIni } from "@aws-sdk/credential-providers";

const REGION = 'us-east-1'

const ec2Client = new EC2Client({
    region:REGION,
    credentials:fromIni({
        profile:'personal'
    })
});

const reboot = async ()  => {
    try{
      const response = await ec2Client.send(new RebootInstancesCommand({
        InstanceIds:['i-0da90d2f83469943f']
      }))
      console.log(response)
    }catch(error){
        console.log(error)
    } 
}

reboot()