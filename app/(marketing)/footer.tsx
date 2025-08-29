import { Button } from "@/components/ui/button"
import Image from "next/image";

export const Footer =() => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">    
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="flex-1">
                    <Image 
                        src="/ca.svg" 
                        alt="English" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    English (CA)
                </Button>

                <Button size="lg" variant="ghost" className="flex-1">
                    <Image 
                        src="/kr.svg" 
                        alt="Korean" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Korean
                </Button>

                <Button size="lg" variant="ghost" className="flex-1">
                    <Image 
                        src="/cn.svg" 
                        alt="Chinese" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Chinese (Simplified)
                </Button>

                <Button size="lg" variant="ghost" className="flex-1">
                    <Image 
                        src="/fr.svg" 
                        alt="French" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    French (CA)
                </Button>

                <Button size="lg" variant="ghost" className="flex-1">
                    <Image 
                        src="/in.svg" 
                        alt="Indian" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Indian
                </Button>
                
            </div>
        </footer>
    );
};