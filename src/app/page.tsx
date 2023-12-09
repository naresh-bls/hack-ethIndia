import ConnectButton from "@/components/ConnectButton"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Web3-Auth
      </div>
      <ConnectButton />
    </main>
  )
}