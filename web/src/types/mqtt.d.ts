import 'mqtt'

declare module 'mqtt' {
  interface IClientOptions {
    passphrase?: string
  }
}
