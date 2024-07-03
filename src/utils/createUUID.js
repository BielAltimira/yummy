export default function createUUID() {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  } else {
    return createUUIDv4(); 
  }
}