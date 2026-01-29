
interface Social {
  type: "github" | "linkedin" | "gmail";
  url: string;
}

interface Experience {
  company: string;
  position?: string;
  startDate: string;
  endDate: string;
  description?: string;
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
  experiences: Experience[];
}