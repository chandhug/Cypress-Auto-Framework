
const getEnvironmentVariable = (name) => {
    const value = Cypress.env(name);
    if(value){
        return value;
    }
    console.warn('No Environment Variable', name)
}

const config = getEnvironmentVariable('ENVIRONMENT_NAME', 'test');



const QA_CONFIG = {
    URL : 'https://qa.google.com/login',
    ADMIN_USER_NAME : 'admin@test.com',
    ADMIN_USER_PSWD : 'letmein',
    PROVIDER_USER_NAME : 'qa_provider@test.com',
    PROVIDER_USER_PASSWORD : 'providerpswd',
    THERAPIST_USER_NAME : 'qa_therapist@test.com.',
    THERAPIST_USER_PASSWORD : 'therapistpswd'

}

const DEV_CONFIG = {
    URL : 'https://dev.equipbehavioralhealth.com/login',
    ADMIN_USER_NAME : 'dev_admin@test.com',
    ADMIN_USER_PSWD : 'letmein',
    PROVIDER_USER_NAME : 'dev_provider@test.com',
    PROVIDER_USER_PASSWORD : 'providerpswd',
    THERAPIST_USER_NAME : 'dev_therapist@test.com',
    THERAPIST_USER_PASSWORD : 'therapistpswd'
    
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


const configurationForEnv = getConfiguration(config);

export const URL = getConfiguration.URL;
export const ADMIN_USER_NAME = getConfiguration.ADMIN_USER_NAME;
export const ADMIN_USER_PSWD = getConfiguration.ADMIN_USER_PSWD
export const PROVIDER_USER_NAME = getConfiguration.PROVIDER_USER_NAME
export const PROVIDER_USER_PASSWORD = getConfiguration.PROVIDER_USER_PASSWORD
export const THERAPIST_USER_NAME = getConfiguration.THERAPIST_USER_NAME
export const THERAPIST_USER_PASSWORD = getConfiguration.THERAPIST_USER_PASSWORD

