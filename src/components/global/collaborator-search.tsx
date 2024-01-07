import { User } from "@/lib/supabase/supabase.types";
import React from "react";

interface CollaboratorSearchProps {
  existingCollaborators: User[] | [];
  getCollaborator: (collaborator: User) => void;
  children: React.ReactNode;
}

const CollaboratorSearch: React.FC<CollaboratorSearchProps> = ({
  children,
  existingCollaborators,
  getCollaborator,
}) => {
  return <div>CollaboratorSearch</div>;
};

export default CollaboratorSearch;
