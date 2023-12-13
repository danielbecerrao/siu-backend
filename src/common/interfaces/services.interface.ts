export interface MimeType {
  ext: string;
  mime: string;
  description: string;
  enabledPlugin: boolean;
  suffixes: string;
  type: string;
}

export interface S3Image {
  name: string;
  format: string;
}

export interface FileData {
  id: number;
  newsId: number;
  name: string;
  description: string;
  url: string;
  filepath: string;
  format: string;
  file: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
