import bcrypt from "bcrypt";

interface Cryptography {
  encrypt: (value: string) => string;
}

interface Dcryptography {
  dencrypt: (value: string, compary: string) => boolean;
}

export class BcryptAdapter implements Cryptography {
  private readonly salt: number;

  constructor(salt: number) {
    this.salt = salt;
  }

  encrypt(value: string): string {
    const hash = bcrypt.hashSync(value, this.salt);
    return hash;
  }
}

export class DcryptAdapter implements Dcryptography {
  dencrypt(value: string, compareSync: string): boolean {
    const comparyHash = bcrypt.compareSync(value, compareSync);
    return comparyHash;
  }
}
