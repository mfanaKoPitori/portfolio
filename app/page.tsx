import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-4 text-xs md:mt-6 md:text-md lg:text-lg">
      <div className="font-light justify-self-center justify-left w-1/2 p-2">
        <div className="flex justify-between align-middle">
          <span className="flex gap-x-4 items-center">
            <p>Hi, My name is Raymond Mawina</p>
            <Image 
              src="/headshot.jpg"  
              width={70}
              height={70}
              alt="Picture of the author"
              className="rounded-full">
            </Image>
          </span>
          
        </div>
      
        <p className="mt-4 md:mt-6">I am a humanoid software engineer based in Pretoria, South Africa. I am passionate about technology and I love discovering and solving problems.</p>
        <p></p>
        
        <p className="mt-4 md:mt-6">I build all sorts of tech things, such as apps, websites, apis, even games. I also write code that helps with data analysis and also tinker with data engineering.</p>
        <p></p>

        <p className="mt-4 md:mt-6">In the last 2 years, I have worked for the companies <Link href="https://umuzi.org" className="text-purple-800 hover:text-purple-600">Umuzi.org</Link> and <Link href="https://umbonocloud.com" className="text-purple-800 hover:text-purple-600">Umbono Cloud</Link> as fullstack developer.</p>

        <div className="mt-6 md:mt-8 flex gap-x-1 border-b-1 border-dotted border-gray-800">                                                                                                                                                                                                                 
          <p className="mb-6 md:mt-8">For my extensive list of my technical work and skills, <Link href="/skills" className="text-purple-800 hover:text-purple-600">
            click here
          </Link></p>
        </div>

        <div className="mt-4 md:mt-6 flex justify-between gap-2">
          <div>
            <p className="font-extralight">Want to work together on a project? <Link href="https://umbonocloud.com" className="text-purple-800 hover:text-purple-600">click here</Link></p>
            <p className="font-extralight">Want to say hi or hire me? <Link href="https://umbonocloud.com" className="text-purple-800 hover:text-purple-600">click here</Link></p>
          </div>
        </div>

        <div className="my-4 md:mt-6 justify-self-end">
          <span className="flex items-center gap-6 hover:scale-x transition-transform">
              <Link className="z-0 -m-1.5" href=""><Image src="./github_icon.svg" width={40} height={40} alt="github icon"/></Link>
              <Link className="z-10 -m-1.5" href=""><Image src="linkedin_icon.svg" width={40} height={40} alt="linkedin icon" /></Link>
              <Link className="z-20 -m-1.5" href=""><Image src="x_twitter_icon.svg" width={40} height={40} alt="x icon"/></Link>
          </span>
        </div>
      </div>
      <div className="fixed top-1/4 right-7 -translate-y-1/2">
        <div className="rotate-270 origin-right">
          <Link
            href="https://umbonocloud.com"
            className="text-gray-50 bg-gray-500 p-2 text-center inline-block border rounded-tr-xl rounded-tl-xl"
          >
            Download my resume
          </Link>
        </div>
      </div>
      
    </div>
  );
}
