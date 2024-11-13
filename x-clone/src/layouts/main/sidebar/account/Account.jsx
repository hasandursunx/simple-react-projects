import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"

export default function Account() {
    return (
        <div className="mt-auto">
            <Popover>
                <PopoverButton
                    className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex"
                >
                    test
                </PopoverButton>
                <PopoverPanel>
                    açılacak yer
                </PopoverPanel>
            </Popover>
        </div>
    )
}