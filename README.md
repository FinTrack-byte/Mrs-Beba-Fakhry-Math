# Mrs Beba Fakhry - Full Project

Local static site. Configure Firebase (Auth, Firestore, Storage) and open index.html.

Collections used:
- users (doc id = uid): {name,email,group,role,paid,present,rating}
- groups (doc id = groupId): {lessonNumber,active,cancelled}
- groups/{groupId}/chat
- groups/{groupId}/homework

Remember to secure your Firebase rules for production.