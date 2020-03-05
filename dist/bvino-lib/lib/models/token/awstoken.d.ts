import { IdToken } from './idtoken';
import { AccessToken } from './accesstoken';
import { RefreshToken } from './refreshtoken';
export declare class AwsToken {
    idToken: IdToken;
    accessToken: AccessToken;
    refreshToken: RefreshToken;
    clockDrift: number;
}
