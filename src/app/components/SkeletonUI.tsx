import { Skeleton } from '@/components/ui/skeleton'
const SkeletonUI = () => {
    return (
        <div className='grid h-[100vh] grid-cols-1 p-5 xs:grid-cols-2 sm:grid-cols-3 2md:grid-cols-4 gap-5' >
            {
                Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton key={index} className="w-full bg-[#575855] h-full p-0" >
                        <div className="pb-3 w-full h-full rounded-sm drop-shadow-xl/50 border-2 border-black bg-[#7c7e73] flex flex-col justify-center" >
                            <div className='border-b-2 py-3 md:shrink-0 border-b-gray-300 flex-2 flex justify-center' >
                                <Skeleton className='rounded-md border-2 shadow-xl border-black h-36 w-36' />
                            </div>
                            <div className='px-3 pt-2 flex-3 flex flex-col gap-3'>
                                <div className='flex items-center justify-center' >
                                <Skeleton className='w-[55%]h-5 ' />
                                </div>
                                <div className='w-[80%] flex flex-col gap-3' >
                                <Skeleton className='h-3 ' />
                                <Skeleton className='h-3' />
                                <Skeleton className='h-3' />
                                <Skeleton className='h-3' />
                                <Skeleton className='h-3' />
                                </div>
                            </div>
                        </div>
                    </Skeleton>
                ))
            }
        </div>
    )
}

export default SkeletonUI