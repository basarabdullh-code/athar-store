/**
 * Storage service abstraction
 * Supports Supabase Storage, AWS S3, etc.
 */

export interface StorageProvider {
  upload(filePath: string, fileBuffer: Buffer): Promise<string>;
  download(filePath: string): Promise<Buffer>;
  delete(filePath: string): Promise<void>;
  getPublicUrl(filePath: string): string;
}

/**
 * Supabase Storage Provider
 */
export class SupabaseStorageProvider implements StorageProvider {
  private supabaseUrl: string;
  private supabaseKey: string;
  private bucketName: string = 'athar-digital-products';

  constructor() {
    this.supabaseUrl = process.env.SUPABASE_URL || '';
    this.supabaseKey = process.env.SUPABASE_ANON_KEY || '';

    if (!this.supabaseUrl || !this.supabaseKey) {
      console.warn('Supabase credentials not configured');
    }
  }

  async upload(filePath: string, fileBuffer: Buffer): Promise<string> {
    // TODO: Implement Supabase upload
    console.log(`Uploading to Supabase: ${filePath}`);
    return `${this.supabaseUrl}/storage/v1/object/public/${this.bucketName}/${filePath}`;
  }

  async download(filePath: string): Promise<Buffer> {
    // TODO: Implement Supabase download
    throw new Error('Not implemented');
  }

  async delete(filePath: string): Promise<void> {
    // TODO: Implement Supabase delete
    console.log(`Deleting from Supabase: ${filePath}`);
  }

  getPublicUrl(filePath: string): string {
    return `${this.supabaseUrl}/storage/v1/object/public/${this.bucketName}/${filePath}`;
  }
}

/**
 * Storage Provider Factory
 */
export function getStorageProvider(): StorageProvider {
  const provider = process.env.STORAGE_PROVIDER || 'supabase';

  if (provider === 'supabase') {
    return new SupabaseStorageProvider();
  }

  throw new Error(`Unknown storage provider: ${provider}`);
}
