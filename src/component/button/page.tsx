
export default function Button({children}:any)
{
    return <button
                className="border m-10 rounded-3xl hover:bg-blue-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
               {children}
            </button>
}