export interface ILinkbuttons {
  placeholder : string,
  link : string 
}

export interface ISampleImage {
  title : string;
  params : string;
  img : string;
}

export interface IDetails {
  introduce: string;
  params: string;
  about: ILinkbuttons[]
  sampleImg : ISampleImage[]
}



export interface IStackList {
  title : string;
  params : string[]
}

export interface IstaticData {
  title: string;
  description: string;
  stack: string[];
  img : string
  details: IDetails
}
