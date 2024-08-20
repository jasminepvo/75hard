# 75Hard With Friends

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## File Structure

```
75hard/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.js
│   │   │   ├── signup/
│   │   │   │   └── page.js
│   │   │   ├── logout/
│   │   │   │   └── page.js
│   │   ├── dashboard/
│   │   │   └── page.js
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── LoginForm.js
│   │   │   ├── SignupForm.js
│   │   │   └── AuthProvider.js
│   │   ├── Layout/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Navbar.js
│   │   └── UI/
│   │       ├── Button.js
│   │       └── Input.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.css
│   ├── lib/
│   │   └── appwrite.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── utils/
│   │   ├── validateEmail.js
│   │   └── formatDate.js
├── .env.local
├── .gitignore
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── README.md
├── package.json
└── package-lock.json
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Future Implementations

- Ability to upload and store progress photos
- The 75 squares uncovers a picture like a puzzle
- Chat with the community

<!-- Notes
this is a challenge that is meant to lift you up, inspire you, challenge your mental toughness and inspire you to become the best version of yourself

tech stack - next.js, tailwind, appwrite

chose appwrite bc its a popular backend server that will help with auth, database

relatively easy to set up so far

Logic Breakdown:

	1.	Track Task Completion:
	•	Track the completion of each task in a day.
	•	If all tasks are completed, check the current date and compare it with the date of the last completed day.
	2.	Date Validation:
	•	First Uncompleted Day: When all tasks are completed, check if the first uncompleted day’s date is either:
	•	Unset (meaning this is the first day being completed).
	•	The current day (meaning this is the correct day in sequence).
	•	If the above conditions are met, mark the day as completed and save the date.
	3.	Reset on Failure:
	•	If the current day’s date is not in sequence (e.g., if yesterday was completed but today isn’t the next day in the sequence), then reset all days and start over.
	•	This prevents the user from filling days out of order and enforces the discipline required by the 75 Hard Challenge.
	4.	Updating Progress:
	•	Only move to the next day if all tasks for the current day are completed and the date is correct.
	•	If the conditions are not met, reset the entire progress.

Does It Make Sense?

Yes, this logic makes perfect sense for the 75 Hard Challenge:

	•	Strict Sequence: The challenge requires strict daily completion, so ensuring that days are filled sequentially and resetting on failure is exactly what’s needed.
	•	Daily Reset: If a user fails to complete the tasks on any day or tries to skip a day, they must start over, which is implemented with the reset logic.


 -->
