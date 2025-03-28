import { React, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { CoachingExpert } from "@/services/Options"
import Image from 'next/image';

function UserInputDialog({ children, coachingOption }) {

    const [selectExpert, setSelectExpart] = useState(null);

    return (
        <div>
            <Dialog>
                <DialogTrigger>{children}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{coachingOption.name}</DialogTitle>
                        <DialogDescription asChild>
                            <div className="mt-3">
                                <h2 className='text-black'>Enter a topic to master your skills in {coachingOption.name} </h2>
                                <Textarea placeholder="Enter your Topic Here..." className='mt-2' />
                                <h2 className='text-black mt-5'>Enter a topic to master your skills in {coachingOption.name} </h2>
                                <div className='grid grid-cols-3 md:grid-cols-5 gap-6 mt-3'>
                                    {CoachingExpert.map((expart, index) => {
                                        <div key={index} onClick={() => setSelectExpart(expart.name)}>
                                            <Image src={expart.avatar} alt={expart.name} width={100} height={100} className={`rounded-2xl h-[80px] w-[80px] object-cover hover:scale-105 transition-all cursor-pointer p-1 border-primary ${selectExpert == expart.name && 'border'}`} />
                                            <h2 className='text-center'>{expart.name}</h2>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UserInputDialog
