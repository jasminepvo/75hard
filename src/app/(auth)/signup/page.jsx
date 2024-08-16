
import { getLoggedInUser } from "@/lib/server/appwrite";
import { ID } from "node-appwrite";
import { createAdminClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signUpWithGithub } from "@/lib/server/oauth";

async function signUpWithEmail(formData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    const { account } = await createAdminClient();

    await account.create(ID.unique(), email, password, name);
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("my-custom-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });

    redirect("/account");
}

export default async function SignUpPage() {
    const user = await getLoggedInUser();
    if (user) redirect("/account");

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

            <form action={signUpWithEmail} className="space-y-4 w-full max-w-md">
                <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                />
                <input
                    id="password"
                    name="password"
                    placeholder="Password"
                    minLength={8}
                    type="password"
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                />
                <input
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Sign up
                </button>
            </form>

            <div className="mt-6 w-full max-w-md">
                <form action={signUpWithGithub}>
                    <button
                        type="submit"
                        className="w-full py-3 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
                    >
                        Sign up with GitHub
                    </button>
                </form>
            </div>
        </div>
    );
}