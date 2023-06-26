import Hero from "@/components/Hero";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  // const welcomeUser = (userName: string, toastHandler = toast) => {
  //   console.log(userName);
  //   toastHandler.success(
  //     `Welcome back ${userName !== "Unnamed" ? userName : ""}!`,
  //     {
  //       style: {
  //         background: "#04111d",
  //         color: "#fff",
  //       },
  //     }
  //   );
  // };

  return (
    <div className={styles.wrapper}>
      {/* <Toaster position="bottom-center" reverseOrder={false} /> */}
      <Hero />
    </div>
  );
}

const styles = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};
