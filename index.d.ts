declare module "react-azure-adb2c" {
  export interface IAuthentication {
    initialize(configuration: any): void
    run(callBack: Function): void
    required(WrappedComponent: any, renderLoading: any): boolean
    signOut(): void
    getAccessToken(): string
    refreshAccessToken(): void
  }
  
  const authentication: IAuthentication
  export default authentication
}
