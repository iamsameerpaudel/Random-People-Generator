import { Button } from "@/components/ui/button"
import { person } from "./personType"
import PersonCard from "./PersonCard"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import DetailedPerson from "./DetailedPerson"

export function PersonDetailsDialogue({ person }: { person: person }) {
    return (
        <Dialog>
            <DialogTrigger className="" asChild>
                <Button className="h-full w-full p-0" >
                    <PersonCard propPerson={person} />
                </Button>
            </DialogTrigger >
            <DialogContent className="sm:max-w-[500px] max-h-[90vh]  overflow-scroll text-background bg-[#7c7e73] drop-shadow-xl/50 ">
                <DialogTitle className="text-center text-2xl font-bold" >Details</DialogTitle>
                <DialogDescription className="text-center text-background text-lg" >Click any detail to copy to clipboard</DialogDescription>
                <DetailedPerson person={person} />
            </DialogContent>
        </Dialog>
    )
}
