declare module '@lhci/server' {
  export function createServer(options: any): Promise<{ port: number }>
}
