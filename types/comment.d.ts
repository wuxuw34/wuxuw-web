

interface CommentMessage {
  id: string;
  content: string;
  username: string;
  timestamp: string | number;
  email?: string;
  website?: string;
  parentId?: string;
  children?: CommentMessage[];
  replyTo?: string;
  os: 'windows' | 'macos' | 'linux' | 'android' | 'ios' | 'other';
  browser: string;
}