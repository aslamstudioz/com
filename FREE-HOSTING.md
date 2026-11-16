# Free GitHub Pages edition
Active source: free-site/. The older app/admin and app/api files are retained as historical source and are not deployed. The existing app/globals.css and public/ assets are reused.

GitHub Actions builds free-site and publishes it to /com/. Firebase Authentication uses Google sign-in; Firestore holds public albums, photo paths and public contact/social settings. Firestore security rules enforce owner writes for the verified aslamstudioz01@gmail.com account. This does not use Cloud Storage, Cloud Functions, or a billing upgrade. Free service quotas still apply.

Upload approved public JPG/PNG/WebP images to public/images using GitHub. After deployment completes, sign in at /com/admin/ and add their paths (for example images/wedding-01.jpg) to an album. Gallery removal does not delete the image files from GitHub or Git history.

Bookings open WhatsApp with the visitor's form details. The visitor must press Send. No booking enquiry is written to Firestore; no booking is automatically confirmed.

Firebase console requirements: Google provider enabled, aslamstudioz.github.io added to authorized domains, and firebase/firestore.rules published. Only public metadata belongs in albums/photos/settings. Do not put private client details there.

If deployment cannot enable Pages, open repository Settings > Pages > Source and choose GitHub Actions, then rerun the failed deployment.
