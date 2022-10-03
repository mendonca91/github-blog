import { useCallback, useEffect, useState } from "react";
import {FaUsers, FaBuilding, FaGithub, FaCaretSquareUp} from 'react-icons/fa'
import { ExternalLink } from "../../../../components/ExternalLink"
import { ProfileContainer, ProfileDetails, ProfileImage } from "./Profile.styles";
import { api } from "../../../../services/apit";
import { Loading } from "../../../../components/Loading";
import { ProfileData } from "./Profile.types";

const username = 'mendonca91';



export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );
  const [isLoading, setIsLoading] = useState(true);  

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${username}`);

      setProfileData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProfileImage src={profileData.avatar_url} />
             

          <ProfileDetails>
            <header>
              <h1>{profileData.name}</h1>

               <ExternalLink
                text="Github"
                href={profileData.html_url}
                target="_blank"
              />
            </header>
            <p>{profileData.bio}</p>
            <ul>
              <li>
                <FaGithub/>
                {profileData.login}
              </li>
              {profileData?.company && (
                <li>
                  <FaBuilding />
                  {profileData.company}
                </li>
              )}
              <li>
                <FaUsers />
                {profileData.followers} seguidores
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  );
}