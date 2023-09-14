# PF HENRY | E-commerce react app

### 1. Install Dependencies

```sh
$ yarn install
```

### 2. Create a new firebase project

Login to your google account and create a new firebase project [here](https://console.firebase.google.com/u/0/)

````

After setting up necessary configuration,
create a **Database** and choose **Cloud Firestore** and start in test mode

### 3. Run development server
```sh

$ yarn dev
````

---

## Build the project

```sh
$ yarn build
```

## How to add products or perform CRUD operations for Admin

1. Navigate to your site to `/signup`
2. Create an account for yourself
3. Go to your firestore collection `users collection` and edit the account you've just created. Change the role from `USER` to `ADMIN`.
4. Reload or sigin again to see the changes.

**Firebase Admin to be integrated soon**

## Features

- Admin CRUD operations
- Firebase authentication
- Firebase auth provider authentication
- Account creation and edit
