import GlassPane from '@/components/GlassPane'
import '../../styles/global.css'
import Sidebar from '@/components/sidebar'



export default function DashboardTootLayout({children}) {
    return( 
        <> 
            <html lang="en">
             <head></head> 
             <body className="h-screen w-screen candy-mesh p-6">
                <GlassPane className="w-full h-full flex items-center justify-center">   
                    <Sidebar />
                    {children}
                </GlassPane>
             </body>    
            </html> 
         </>
     )
}