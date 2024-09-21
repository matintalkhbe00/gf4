const tokens = [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlN2Y2OThmZjM0YmE2YzMyYzM3ZGFmIiwiaWF0IjoxNzI2OTI1OTE1LCJleHAiOjE3MjcwMTIzMTUsInR5cGUiOiJhY2Nlc3MifQ.garw41ioAstgpmAYjrWeiEuPaPPbyveDWqyBYeb93ho",
    //09964711498
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZkZGZiNjYxZjdmMGYxNGZmYzkxNDAyIiwiaWF0IjoxNzI2OTI1ODIwLCJleHAiOjE3MjcwMTIyMjAsInR5cGUiOiJhY2Nlc3MifQ.kFvHxOiJmHolz_a9FPun1tRJHigobO2VFPYx_Ycax8o",
    //09912984617
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlN2ZhYzI2M2Y3Mzg1MGY4YjJjYTRiIiwiaWF0IjoxNzI2OTI1NjkzLCJleHAiOjE3MjcwMTIwOTMsInR5cGUiOiJhY2Nlc3MifQ.O4xIJsPpiUgv1YFCM_SVRyJhjhttkAvvv4pxwjzjJD0",
    // 09025967864
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZTA2NWEyYTgxMGEwYjQ1OGQ0NWU0IiwiaWF0IjoxNzI2ODc1MjI3LCJleHAiOjE3MjY5NjE2MjcsInR5cGUiOiJhY2Nlc3MifQ.gURfL4UOFBrkblB7rf9WsCV5stgaQVLSy0YyHaqMyGs",
    //09303884022
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlYzE4YTM5YTlkNTdkOTNmMDAzODU4IiwiaWF0IjoxNzI2OTE2NTYzLCJleHAiOjE3MjcwMDI5NjMsInR5cGUiOiJhY2Nlc3MifQ.jS_Xnfh_Mn6wQRuIge1PL2GxWRYbd5W5fOkKKaZ0QVA" ,
    //09357792770
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlYzE2M2E5YTlkNTdkOTNmZmJhZDcxIiwiaWF0IjoxNzI2OTE2NDYxLCJleHAiOjE3MjcwMDI4NjEsInR5cGUiOiJhY2Nlc3MifQ.01xf0o7HWDQTS2TBUhNcdCJdlyexexwczgJ0eUt4GLA",
    //09036567864
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlYzEwNTc2M2Y3Mzg1MGY4M2ZkN2Y1IiwiaWF0IjoxNzI2OTE2MjM0LCJleHAiOjE3MjcwMDI2MzQsInR5cGUiOiJhY2Nlc3MifQ.iFBg0GDzbmmRK_hiUTiWM8pbvzZiD2Dlu2AaLvDep-Y",
    //09197473984
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZTAzZDk1NGI2OTAxNzgwMDk5ZWE5IiwiaWF0IjoxNzI2ODc0NTg2LCJleHAiOjE3MjY5NjA5ODYsInR5cGUiOiJhY2Nlc3MifQ.7ScySwuYovsGLAeBQeMs3qtua-1SphFrGWYEjI-cC6g",
    //09045087864
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZTA0NWMxMjM0Y2ZkYTZlZDc5Yjk5IiwiaWF0IjoxNzI2ODc0NzE3LCJleHAiOjE3MjY5NjExMTcsInR5cGUiOiJhY2Nlc3MifQ.qAFS2VbAmEbxMG9AiNUNnMuOT0dMT10_df81f0VAgvQ",
    //09365087864
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZTA0ZTEyYTgxMGEwYjQ1OGJjMjI1IiwiaWF0IjoxNzI2ODc0ODQ5LCJleHAiOjE3MjY5NjEyNDksInR5cGUiOiJhY2Nlc3MifQ.rrJdfY1zjMfY0VTF5zjp9XJye-d2fFGcZJHhaaYSJRU",
    //09191493905
      
    ];
    
    async function fetchMissionsForTokens() {
        let total = 0;
        for (const token of tokens) {
            console.log(`Processing token: ${token}`);
            
            try {
                const response = await fetch("https://api-mission.goatsbot.xyz/missions/user/", {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
    
                const data = await response.json();
                const inactiveMissions = [];
                let totalCoins = 0;
    
                for (const [key, missions] of Object.entries(data)) {
                    const filteredMissions = missions.filter(mission => !mission.status);
    
                    filteredMissions.forEach(mission => {
                        inactiveMissions.push(mission._id);
                        totalCoins += mission.reward;
                    });
                }
                total += totalCoins
                console.log(`Inactive Mission IDs`, inactiveMissions);
                console.log(`Total Coins`, totalCoins);
                console.log(`Total`, total);
                
    
                for (const missionId of inactiveMissions) {
                    const actionResponse = await fetch(`https://dev-api.goatsbot.xyz/missions/action/${missionId}`, {
                        method: "POST",
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });
    
                    if (actionResponse.ok) {
                        console.log(`Action executed for mission ID: ${missionId}`);
                    } else {
                        console.error(`Failed to execute action for mission ID: ${missionId} `);
                    }
                }
    
            } catch (error) {
                console.error(`Error for token ${token}:`, error);
            }
        }
    }
    
    // فراخوانی تابع
    fetchMissionsForTokens();
    