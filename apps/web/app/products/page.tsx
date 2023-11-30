import {
    BanknotesIcon,
    BriefcaseIcon,
    ChatBubbleLeftRightIcon,
    FunnelIcon,
    ShoppingBagIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { Theme } from "@leebrooks3/ui";

import Header from "../../components/header";

const features = [
    {
        name: "Corporate",
        description:
            "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
        href: "#",
        icon: BriefcaseIcon,
    },
    {
        name: "Finance",
        description:
            "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
        href: "#",
        icon: BanknotesIcon,
    },
    {
        name: "Marketing",
        description:
            "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
        href: "#",
        icon: FunnelIcon,
    },
    {
        name: "People",
        description:
            "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
        href: "#",
        icon: UsersIcon,
    },
    {
        name: "Sales",
        description:
            "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
        href: "#",
        icon: ShoppingBagIcon,
    },
    {
        name: "Support",
        description:
            "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
        href: "#",
        icon: ChatBubbleLeftRightIcon,
    },
];

function ProductsPage() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32 relative">
            <Header theme={Theme.dark} />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Starta</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        The platform to manage your business
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
                        eaque, iste dolor cupiditate blanditiis.
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <img
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt="App screenshot"
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                        width={2432}
                        height={1442}
                    />
                    <div className="relative" aria-hidden="true">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-white">
                                <feature.icon
                                    className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                                    aria-hidden="true"
                                />
                                {feature.name}
                            </dt>{" "}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}

export default ProductsPage;
