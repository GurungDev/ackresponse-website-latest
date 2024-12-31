
// import { Preview, Html, Tailwind, Body, Container, Section, Heading, Text, Button } from "@react-email/components";

// type EmailContentProps = {
//     first_name: string;
//     last_name: string;
//     email: string;
//     phone?: string | null;
//     company?: string | null; 
//     message: string;
//     country: string;
// }

// export const EmailTemplate = ({ first_name, last_name, email, phone, company, message, country }: EmailContentProps) => {
//     return (
//         <Html>
//             <Preview>New Message From {first_name} {last_name}.</Preview>
//             <Tailwind>
//                 <Body className="bg-gray-100 p-4">
//                     <Container className="bg-white rounded-lg shadow-lg p-6 w-full">
//                         <Section>
//                             <Heading className="text-xl font-bold mb-4 text-center text-black">
//                                 You received a message from {first_name} {last_name}.
//                             </Heading>
//                         </Section>
//                         <Section className="mb-4">
//                             <Text className="text-gray-700 font-semibold">Email: <span className="font-medium">{email}</span></Text>
//                             <Text className="text-gray-700 font-semibold">Country: <span className="font-medium">{country}</span></Text>
//                             {phone && (
//                                 <Text className="text-gray-700 font-semibold">Phone: <span className="font-medium">{phone}</span></Text>
//                             )}
//                             {company && (
//                                 <Text className="text-gray-700 font-semibold">Company: <span className="font-medium">{company}</span></Text>
//                             )}
//                         </Section>

//                         <Section>
//                             <Text className="text-gray-700 font-semibold">Message:</Text>
//                             <Text className="mt-2 p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-800">{message}</Text>
//                         </Section>

//                         <Section className="mt-6 text-center">
//                             <Button 
//                                 style={{
//                                     backgroundColor: "#04ba26", 
//                                     color: "white",
//                                     padding: "10px 20px",
//                                     borderRadius: "5px",
//                                     textDecoration: "none",
//                                     fontSize: "16px",
//                                     fontWeight: "bold",
//                                     display: "inline-block",
//                                     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                                 }}
//                                 href="https://www.ackresponse.com/"
//                             >
//                                 Visit Us!
//                             </Button>
//                         </Section>
//                     </Container>
//                 </Body>
//             </Tailwind>
//         </Html>
//     );
// };
