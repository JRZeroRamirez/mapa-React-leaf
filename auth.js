// En un archivo llamado auth.js
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-1', // Como tu ubicación en AWS
    userPoolId: 'aqui-va-tu-codigo', // Lo encuentras en Cognito
    userPoolWebClientId: 'este-es-otro-codigo' // También en Cognito
  }
});
