import { Cypher } from "../cypher";
const private_key = `-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQBZJlCYwEjdhoDAaaOyKwkf+oQ4nad9dIBb+Uep0vBHFBsGO6Ws
dscUlGIWznuVKKMp2NYW0Sxg067ANU1FU874IGFyPKc8k9/nfrVTkWXSfkRVn5XO
tSmhwU+KqA42mML0rhPWaYsCQSPYZ0AYW72jpZdMh0tP1qwiVV2363AtpGKe4RMX
tlM9f/9qlzO0r7F4TR8ay2dWDoIdFXRHXEc86l5Mz17M4OJfiUFax6/L+5mIe4ms
ac33R5Jy3iSfQ+JAhUjVnoxh4BX1l+AhK9cFb/G6d9Uu3Zm5YbDUb1jvBf+9at0c
9FojG0sJVgEcgyBZgwKRSL5T0jGa5tluj+k7AgMBAAECggEAL8AdBWRg4v7rMaSj
wIfakF1fuu9+yey/4AOqheTtPDUhsHn8aF8KjRRZYbvhZ+hnVL/HFFufuJFJlbw3
Ej4sqqy1ZTnlncXa9STiPMuxTUjCk1YyKJDSpshjMXKIgmfabLJc/8hyY5e+emf7
ZdClx+SnIJ+LEE18z7sHwr6BzIAQUl1/dtp/O9QqOXAMJk8cmIFxGa5PbGRxCt9+
ffUoPmYM6LkuOEBnjUmNjB5pwH3cpKdqphUN2RL68y7/dLa/591onPlkUavjXCPn
7/rkcSTPeUoLKlQXS+Ue8eT93ZOf+IpuGu48nAX0n/4OfM9jItX7Q9lbaiq6Eelq
qC7s8QKBgQCpEJ3RbbrnMhnQw7dILOTyu7sJiuaiUuwkZoVMEGgTVrDv3sAYEdm8
Ms5o8itnmEl1DkJZanbHQ6zhBED5C3DDhVIkp62XZkJ7IZ4VLM2d2UkMYZaZXsyG
vwxvva4fsR3SM4cB6FNxjQafwBp0m0yTa5Ro6yOwGXhqxLHK5IpaCQKBgQCG/c7K
lY4hkzt9WgN9eqfbXR1WFo15RWmTy193sEXJPNqI7wZ7R45cCNOXUpRCyLhiWJLo
7/zI1A0hxQFPhMGXQzdHuM3J8K6j/rH3F3DEEkK0ynRZNRmABTBiBe5CL5wD0o2G
wmQppMWLZRnPCcPMXjngQId/3kGBJFEwOGdKIwKBgGomILCpsLwQXN0SxTTv2x/8
dsbbC0vHvLRuGitT8cSSna09smZqbscXLzn9MvtsRlLUjRwPGFysRRNS1GiJoldg
kd6p2PhCIGOnC9ZHtyHwl0jKzP+m4cuIkIpoEbecQRkFeTLdZ+bXoN0UhIfKKh41
YY0udc3PcCe5L9gv/h3hAoGARwb2rqtATLQ+YfdhzL0j4w08aVaWe8+k/InOophS
L89gIRq7a1Q8OHrAcmeV8QnR0pVOP1g+xqCkhDc3OFLe1asdRBSd2vpTuaBCnYNs
5w3AoYXA8Es7LpwMWBdMxPBuA6jepKBVuX+kHXNFwCUgK8EMbM0nPoWAK+Yi/d8/
occCgYAz+jP0S7kT8yS0RTkiyaVeHqbMtfFJXEPkOj9P6Gsjm76m9UxE7l403KOD
LO8gNxuH7XSOekd6fTbY7Hp9yCGyFcfu4Spx11QLZYE9BUN9ZSvqwKvL5BUjsqOA
Ok+ll2gpXM5DdZVcBvt3zU9Xil6FSpyU6Ufg/i5vcOtZVGvsRg==
-----END RSA PRIVATE KEY-----`;

const public_key = `-----BEGIN PUBLIC KEY-----
MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBZJlCYwEjdhoDAaaOyKwkf
+oQ4nad9dIBb+Uep0vBHFBsGO6WsdscUlGIWznuVKKMp2NYW0Sxg067ANU1FU874
IGFyPKc8k9/nfrVTkWXSfkRVn5XOtSmhwU+KqA42mML0rhPWaYsCQSPYZ0AYW72j
pZdMh0tP1qwiVV2363AtpGKe4RMXtlM9f/9qlzO0r7F4TR8ay2dWDoIdFXRHXEc8
6l5Mz17M4OJfiUFax6/L+5mIe4msac33R5Jy3iSfQ+JAhUjVnoxh4BX1l+AhK9cF
b/G6d9Uu3Zm5YbDUb1jvBf+9at0c9FojG0sJVgEcgyBZgwKRSL5T0jGa5tluj+k7
AgMBAAE=
-----END PUBLIC KEY-----`;
const phrase = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et molestie felis. Fusce sed pellentesque ex, ut interdum leo. Maecenas ac turpis a turpis elementum laoreet nec at sem. Mauris sagittis consectetur eros.`;
const phrase_2 = `${phrase} xxxxxxxxx`;
const encrypted_data = Cypher.encrypt(phrase, public_key);
const encrypted_data_2 = Cypher.encrypt(phrase_2, public_key);

const decrypted_data = Cypher.decrypt(encrypted_data, private_key);
const decrypted_data_2 = Cypher.decrypt(encrypted_data_2, private_key);

test("Test 1: encryptage data with length <= 214", () => {
  expect(encrypted_data.length).toBe(1);
});

test("Test 2: encryptage data with length > 214", () => {
  expect(encrypted_data_2.length).toBeGreaterThan(1);
});

test("Test 3: decrypt data enrypted with phrase length <= 214", () => {
  expect(phrase).toBe(decrypted_data);
});

test("Test 4: decrypt data enrypted with phrase length > 214", () => {
  expect(phrase_2).toBe(decrypted_data_2);
});
