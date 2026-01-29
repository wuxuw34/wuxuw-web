
interface Social {
  type: "github" | "linkedin" | "gmail";
  url: string;
}

interface Profile {
  name: string;
  avatar: string;
  title: string;
  description: string;
  workExperience: number;
  birthday: string;
  sex: "male" | "female";
  location: string;
  socials?: Social[];
  tags?: string[];
  skills?: string[];
}