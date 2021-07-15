/**
 * @description explicit type of any
 * @deprecated avoid using it anyway
 */
type ANY = any

declare module '*.module.scss' {
    const classes: {readonly [key: string]: string}
    export default classes
}
