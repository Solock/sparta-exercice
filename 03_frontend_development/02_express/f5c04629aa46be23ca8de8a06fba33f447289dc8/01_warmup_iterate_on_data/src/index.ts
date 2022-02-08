// Code here

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

function getEmail(sentence: User): string[] {
  return [sentence.email];
}
