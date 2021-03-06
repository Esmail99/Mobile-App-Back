## Dashboard API

### Login

#### post Request

**Request:** `/login`

```json
{
  "code": "1000"
}
```

**Response:**

- **200:**

```json
{
  "token": "averylongtoken34957345sfdghkl",
  "user": {
    "id": "1000",
    "name": "username",
    "phone": "0100000000",
    "image": "https://via.placeholder.com/500?text=image+1",
    "role": "officer", // optional
    "type": "officer",
    "committee": "web",
    "feedbacks": [
      {
        "id": "1",
        "title": "feedback 1",
        "date": "26-4-2020",
        "body": "Fake feedback"
      },
      {
        "id": "2",
        "title": "feedback 2",
        "date": "26-5-2020",
        "body": "Fake feedback"
      }
    ],
    "achievements": [
      {
        "id": "1",
        "title": "title 1",
        "date": "26-5-2020",
        "description": "Lorem ipsum"
      },
      {
        "id": "2",
        "title": "title 2",
        "date": "26-5-2020",
        "description": "Lorem ipsum"
      }
    ]
  }
}
```

- **401:**

```json
{
  "msg": "user not found, please try again with a valid code!"
}
```

### Create a User

#### post Request

**Request:** `/users/new`

```json
{
  "name": "user name",
  "phone": "0100000000",
  "image": "https://via.placeholder.com/500?text=image+1",
  "role": "officer", // optional --> 'officer'/'member'/'head'
  "type": "officer",
  "committee": "web", // optional
  "code": "34543543sdf56",
  "permissions": "admin" // or 'head'
}
```

**Response:**

- **200:**

```json
{
  "msg": "User created successfully !",
  "user": {
    "name": "user name",
    "phone": "0100000000",
    "image": "https://via.placeholder.com/500?text=image+1",
    "role": "officer", // optional --> 'officer'/'member'/'head'
    "type": "officer",
    "committee": "web", // optional
    "code": "34543543sdf56",
    "permissions": "admin" // or 'head'
  }
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again later!"
}
```

- **409:**

```json
{
  "msg": "User already existed !"
}
```

### Get users

- If `Admin` --> Return all users.
- If `head` --> check the `committee` --> return the members (not him) of his committee.

#### get Request

**Request:** `/users`

**Response:**

- **200:**

```json
[
  {
    "id": "1000",
    "name": "username",
    "phone": "0100000000",
    "image": "https://via.placeholder.com/500?text=image+1",
    "role": "officer",
    "type": "officer",
    "committee": "web",
    "feedbacks": [
      {
        "id": "1",
        "title": "feedback 1",
        "date": "26-4-2020",
        "body": "Fake feedback"
      },
      {
        "id": "2",
        "title": "feedback 2",
        "date": "26-5-2020",
        "body": "Fake feedback"
      }
    ],
    "achievements": [
      {
        "id": "1",
        "title": "title 1",
        "date": "26-5-2020",
        "description": "Lorem ipsum"
      },
      {
        "id": "2",
        "title": "title 2",
        "date": "26-5-2020",
        "description": "Lorem ipsum"
      }
    ]
  },
  {
    "id": "1000",
    "name": "username",
    "phone": "0100000000",
    "image": "https://via.placeholder.com/500?text=image+1",
    "role": "officer",
    "type": "officer",
    "committee": "web",
    "feedbacks": [
      {
        "id": "1",
        "title": "feedback 1",
        "date": "26-4-2020",
        "body": "Fake feedback"
      },
      {
        "id": "2",
        "title": "feedback 2",
        "date": "26-5-2020",
        "body": "Fake feedback"
      }
    ],
    "achievements": [
      {
        "id": "1",
        "title": "title 1",
        "date": "26-5-2020",
        "description": "Lorem ipsum"
      },
      {
        "id": "2",
        "title": "title 2",
        "date": "26-5-2020",
        "description": "Lorem ipsum"
      }
    ]
  }
]
```

- **500:**

```json
{
  "msg": "An error occurred, try again later !"
}
```

### Delete user

- If `Admin` --> Return all users.
- If `head` --> check the `committee` --> return the members (not him) of his committee.

#### delete Request

**Request:** `/users/:id`

**Response:**

- **200:**

```json
{
  "msg": "User deleted successfully !",
  "user": {
    "name": "user name",
    "phone": "0100000000",
    "image": "https://via.placeholder.com/500?text=image+1",
    "role": "officer", // optional --> 'officer'/'member'/'head'
    "type": "officer",
    "committee": "web", // optional
    "code": "34543543sdf56",
    "permissions": "admin" // or 'head'
  }
}
```

- **404:**

```json
{
  "msg": "User not found !"
}
```

- **500:**

```json
{
  "msg": "An error occurred, try again later !"
}
```

### Edit User

#### put Request

**Request:** `/users/:id`

```json
{
  "name": "user name",
  "phone": "0100000000",
  "image": "https://via.placeholder.com/500?text=image+1",
  "role": "officer", // optional --> 'officer'/'member'/'head'
  "type": "officer",
  "committee": "web", // optional
  "code": "34543543sdf56",
  "permissions": "admin" // or 'head'
}
```

**Response:**

- **200:**

```json
{
  "msg": "User updated successfully !",
  "user": {
    "name": "user name",
    "phone": "0100000000",
    "image": "https://via.placeholder.com/500?text=image+1",
    "role": "officer", // optional --> 'officer'/'member'/'head'
    "type": "officer",
    "committee": "web", // optional
    "code": "34543543sdf56",
    "permissions": "admin" // or 'head'
  }
}
```

### Delete User

#### delete Request

**Request:** `/users/:id`

**Response:**

- **200:**

```json
{
  "msg": "User deleted successfully !"
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again later!"
}
```

### Add feedback

#### post Request

**Request:** `/users/:id/feedback`

```json
{
  "title": "feedback 2",
  "date": "26-5-2020",
  "body": "Fake feedback"
}
```

**Response:**

- **200:**

```json
{
  "msg": "Feedback submitted successfully !",
  "feedback": {
    "title": "feedback 2",
    "date": "26-5-2020",
    "body": "Fake feedback"
  }
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again!"
}
```

### Edit feedback

#### put Request

**Request:** `/users/:id/feedback/:feedbackId`

```json
{
  "title": "feedback 2",
  "date": "26-5-2020",
  "body": "Fake feedback"
}
```

**Response:**

- **200:**

```json
{
  "msg": "Feedback updated successfully !",
  "feedback": {
    "title": "feedback 2",
    "date": "26-5-2020",
    "body": "Fake feedback"
  }
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again!"
}
```

### Delete feedback

#### delete Request

**Request:** `/users/:id/feedback/:feedbackId`

**Response:**

- **200:**

```json
{
  "msg": "Feedback deleted successfully !"
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again!"
}
```

### Add achievement

#### post Request

**Request:** `/users/:id/achievement`

```json
{
  "title": "achievement 2",
  "date": "26-5-2020",
  "description": "Fake achievement"
}
```

**Response:**

- **200:**

```json
{
  "msg": "Achievement submitted successfully !",
  "achievement": {
    "title": "achievement 2",
    "date": "26-5-2020",
    "description": "Fake achievement"
  }
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again!"
}
```

### Edit achievement

#### put Request

**Request:** `/users/:id/achievement/:achievementId`

```json
{
  "title": "achievement 2",
  "date": "26-5-2020",
  "body": "Fake achievement"
}
```

**Response:**

- **200:**

```json
{
  "msg": "Achievement updated successfully !",
  "achievement": {
    "title": "achievement 2",
    "date": "26-5-2020",
    "body": "Fake achievement"
  }
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again!"
}
```

### Delete achievement

#### delete Request

**Request:** `/users/:id/achievement/:achievementId`

**Response:**

- **200:**

```json
{
  "msg": "Feedback deleted successfully !"
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again!"
}
```

## Announcements

### Get announcements

#### get Request

**Request:** `/announcements`

**Response:**

- **200:**

```json
[
  {
    "title": "Announcement 2",
    "body": "Fake data for announcement ",
    "date": "26-04-2020",
    "type": "operation", // or 'general'/'technical'
    "cover": "https://via.placeholder.com/500?text=image+1"
  },
  {
    "title": "Announcement 1",
    "body": "Fake data for announcement ",
    "date": "26-04-2020",
    "type": "operation", // or 'general'/'technical'
    "cover": "https://via.placeholder.com/500?text=image+1"
  }
]
```

- **400:**

```json
{
  "msg": "An error occurred, please try again later!"
}
```

### Post announcements

#### post Request

**Request:** `/announcements`

```json
{
  "title": "Announcement 1",
  "body": "Fake data for announcement ",
  "date": "26-04-2020",
  "type": "operation", // or 'general'/'technical'
  "cover": "https://via.placeholder.com/500?text=image+1"
}
```

**Response:**

- **200:**

```json
{
  "msg": "Announcements created successfully !",
  "announcement": {
    "title": "Announcement 1",
    "body": "Fake data for announcement ",
    "date": "26-04-2020",
    "type": "operation", // or 'general'/'technical'
    "cover": "https://via.placeholder.com/500?text=image+1"
  }
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again later!"
}
```

### Edit announcements

#### put Request

**Request:** `/announcements/:id`

```json
{
  "title": "Announcement 1",
  "body": "Fake data for announcement ",
  "date": "26-04-2020",
  "type": "operation", // or 'general'/'technical'
  "cover": "https://via.placeholder.com/500?text=image+1"
}
```

**Response:**

- **200:**

```json
{
  "msg": "Announcement updated successfully !",
  "announcement": {
    "title": "Announcement 1",
    "body": "Fake data for announcement ",
    "date": "26-04-2020",
    "type": "operation", // or 'general'/'technical'
    "cover": "https://via.placeholder.com/500?text=image+1"
  }
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again later!"
}
```

### Delete announcements

#### delete Request

**Request:** `/announcements/:id`

**Response:**

- **200:**

```json
{
  "msg": "Announcement deleted successfully !"
}
```

- **500:**

```json
{
  "msg": "An error occurred, please try again later!"
}
```
