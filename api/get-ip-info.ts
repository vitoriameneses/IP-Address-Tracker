module.exports = async function (req: any, res: any) {
    const ip = req.query.ip;
    const apiKey = process.env["IP_API_KEY"];
  
    if (!ip) {
      return res.status(400).json({ error: 'IP address is required' });
    }
  
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }
  
    const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch IP data', details: (error as Error).message });
    }
  };
  