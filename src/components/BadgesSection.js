import React, { useState, useEffect } from 'react';

const BadgesSection = ({ account, contract }) => {
  const [badges, setBadges] = useState([]);

  const fetchBadges = async () => {
    if (!contract || !account) return;
    try {
      const badgeIds = await contract.getUserBadges(account);
      const badgeList = [];
      for (let id of badgeIds) {
        const badge = await contract.badges(id);
        badgeList.push({ id: id.toNumber(), metadata: badge.metadata });
      }
      setBadges(badgeList);
    } catch (error) {
      console.error('Error fetching badges:', error);
    }
  };

  useEffect(() => {
    fetchBadges();
  }, [contract, account]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Your Badges</h3>
      {badges.length === 0 ? (
        <p>No badges earned yet.</p>
      ) : (
        <div className="space-y-4">
          {badges.map((badge) => (
            <div key={badge.id} className="border p-4 rounded bg-yellow-100">
              <p>Badge ID: {badge.id}</p>
              <p>Metadata: {badge.metadata}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BadgesSection;