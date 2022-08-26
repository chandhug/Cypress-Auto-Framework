
// const getEnvironmentVariable = (name) => {
//     const value = Cypress.env(name);
//     if(value){
//         return value;
//     }
//     console.warn('No Environment Variable', name);
// }

// const config = getEnvironmentVariable('ENVIRONMENT_NAME', 'qa');

const config = Cypress.env('ENVIRONMENT_NAME');



const QA_CONFIG = {
    URL : 'https://qa.health.com/login',

    ADMIN_USER_NAME : 'admin@test.com',
    ADMIN_USER_PSWD : 'letmein',

    PROVIDER_USER_NAME : 'qa_provider@equip.health',
    PROVIDER_USER_PSWD : 'providerpswd',

    THERAPIST_USER_NAME : 'qa_therapist@equip.health',
    THERAPIST_USER_PSWD : 'therapistpswd',

    PATIENT_USER_NAME : 'qa_therapist@equip.health',
    PATIENT_USER_PSWD : 'therapistpswd',

    CARER_USER_NAME : 'qa_therapist@equip.health',
    CARER_USER_PSWD : 'therapistpswd'

}

const DEV_CONFIG = {
    URL : 'https://dev.equipbehavioralhealth.com/login',
    ADMIN_USER_NAME : 'dev_admin@test.com',
    ADMIN_USER_PSWD : 'letmein',
    PROVIDER_USER_NAME : 'dev_provider@equip.health',
    PROVIDER_USER_PSWD : 'providerpswd',
    THERAPIST_USER_NAME : 'dev_therapist@equip.health',
    THERAPIST_USER_PSWD : 'therapistpswd'
    
}


const getConfiguration = (envName) => {


    switch(envName){
        case('qa'): {
            return QA_CONFIG;
        }
        case('dev'): {
            return DEV_CONFIG;
        }
        case('uat'): {
            return UAT_CONFIG;
        }
        default: {
            return QA_CONFIG;
        }
    }

}


const configurationForEnv = getConfiguration(config)

export const  URL = getConfiguration.URL;
export const  ADMIN_USER_NAME = getConfiguration.ADMIN_USER_NAME;
export const  ADMIN_USER_PSWD = getConfiguration.ADMIN_USER_PSWD;
export const  PROVIDER_USER_NAME = getConfiguration.PROVIDER_USER_NAME;
export const  PROVIDER_USER_PSWD = getConfiguration.PROVIDER_USER_PSWD;
export const  THERAPIST_USER_NAME = getConfiguration.THERAPIST_USER_NAME;
export const  THERAPIST_USER_PSWD = getConfiguration.THERAPIST_USER_PSWD;
export const  PATIENT_USER_NAME  = getConfiguration.PATIENT_USER_NAME;
export const  PATIENT_USER_PSWD  = getConfiguration.PATIENT_USER_PSWD;
export const  CARER_USER_NAME = getConfiguration.CARER_USER_NAME;
export const  CARER_USER_PSWD = getConfiguration.CARER_USER_PSWD;


console.log('Logging URL Value *******************************' + URL);



