export default function SurahCardSkeleton() {
    return (
        <div class="bg-white dark:bg-base-200 rounded-2xl border-2 border-base-300 p-4 max-w-sm w-full h-full mx-auto">
            <div class="animate-pulse flex space-x-4 items-center">
                <div class="rounded-xl bg-gray-300 dark:bg-slate-700 h-10 w-10"></div>
                <div class="flex-1">
                    <div class="flex justify-between">
                        <div>
                            <div class="h-4 w-20 bg-gray-300 dark:bg-slate-700 rounded my-2"></div>
                            <div class="h-2 w-14 bg-gray-300 dark:bg-slate-700 rounded"></div>
                        </div>
                        <div>
                            <div class="h-4 w-20 bg-gray-300 dark:bg-slate-700 rounded my-2"></div>
                            <div class="h-2 w-20 bg-gray-300 dark:bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}