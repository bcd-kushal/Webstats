
export type ClassNameType       = string


export type SitesListType       = { name:string, subtitle:string, targetClassIndex:string }[]

// svgs =====================
export type SVGType             = { className?:ClassNameType, dimensions?: number|string, fill?:string, stroke?:string }