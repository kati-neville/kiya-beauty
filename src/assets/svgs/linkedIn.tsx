import { SVGProps } from "react";
const SvgLinkedIn = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		fill="none"
		{...props}>
		<path
			fill="#111827"
			fillRule="evenodd"
			d="M4.812 3.153c0 1.038-.79 1.878-2.025 1.878-1.188 0-1.978-.84-1.953-1.878C.809 2.065 1.599 1.25 2.81 1.25c1.212 0 1.978.815 2.002 1.903ZM.933 18.6V6.514h3.756v12.085H.933ZM7.7 10.37c0-1.507-.05-2.792-.1-3.855h3.263l.173 1.656h.075c.494-.767 1.73-1.927 3.731-1.927 2.471 0 4.325 1.631 4.325 5.188v7.169H15.41v-6.698c0-1.558-.544-2.62-1.903-2.62-1.038 0-1.656.717-1.902 1.408-.1.248-.149.593-.149.94v6.97H7.701v-8.23H7.7Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgLinkedIn;
