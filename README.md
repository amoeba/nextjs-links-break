# nextjs-links-break

MRE for broken <Link /> behavior in Next.js

## Steps

First:

```sh
git clone git@github.com:amoeba/nextjs-links-break.git
cd nextjs-links-break
npm install
npm run dev
```

Then:

1. Open localhost:3000 in browser
2. Click link to a
3. Open a new blank tap (e.g., Cmd+T)
4. Go to localhost:3000/a
5. Click link to b
6. Open a new blank tap (e.g., Cmd+T)
7. Go to localhost:3000/b
8. (Try) to click link to a, see it doesn't work

I seem to be able to fix this if, at this point, I click the link to b. Then, other links work.
