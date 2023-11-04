export default function SurahSkeleton() {
    return (
        <>
            <div class="animate-pulse px-6 md:px-24">
                <div class="flex justify-between py-8">
                    <div class="h-7 w-32 bg-slate-700 rounded-full"></div>
                    <div class="h-7 w-32 bg-slate-700 rounded-full"></div>
                </div>
                <div class="grid justify-items-center gap-2">
                    <div class="h-8 w-40 bg-slate-700 rounded-lg"></div>
                    <div class="h-3 w-44 bg-slate-700 rounded"></div>
                </div>
                <div class="pt-16">
                    <div class="py-8">
                        {[1, 2, 3, 4].map((x, idx) => {
                            return (
                                <>
                                    <div key={idx} class="grid justify-items-end gap-2">
                                        <div class="h-9 w-56 bg-slate-700 rounded-lg"></div>
                                        <div class="h-3 w-44 bg-slate-700 rounded-lg"></div>
                                    </div>
                                    <div class="my-4 h-3 w-32 md:w-72 bg-slate-700 rounded-lg"></div>
                                    <div class="divider"></div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div class="flex justify-between py-8">
                    <div class="h-7 w-32 bg-slate-700 rounded-full"></div>
                    <div class="h-7 w-32 bg-slate-700 rounded-full"></div>
                </div>
            </div>
        </>
    )
}