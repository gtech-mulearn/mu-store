-- Create table for Project
CREATE TABLE projects (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4(), 
    logo VARCHAR(1000),
    title VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    link VARCHAR(200), 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    FOREIGN KEY (created_by) REFERENCES auth_user(id) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES auth_user(id) ON DELETE SET NULL
);

-- Create table for ProjectImage
CREATE TABLE project_images (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4(), 
    project_id VARCHAR(36) REFERENCES projects(id) ON DELETE CASCADE,
    image VARCHAR(1000), 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create table for Comment
CREATE TABLE projects_comments (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4(), 
    comment TEXT NOT NULL,
    project_id VARCHAR(36) REFERENCES projects(id) ON DELETE CASCADE,
    user_id VARCHAR(36) REFERENCES auth_user(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    FOREIGN KEY (created_by) REFERENCES auth_user(id) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES auth_user(id) ON DELETE SET NULL
);

-- Create table for Vote
CREATE TABLE projects_votes (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4(), 
    vote VARCHAR(10) NOT NULL CHECK (vote IN ('upvote', 'downvote')),
    project_id VARCHAR(36) REFERENCES projects(id) ON DELETE CASCADE,
    user_id VARCHAR(36) REFERENCES auth_user(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    FOREIGN KEY (created_by) REFERENCES auth_user(id) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES auth_user(id) ON DELETE SET NULL
);

-- Create many-to-many relationship table for Project and User
CREATE TABLE projects_contributors (
    project_id VARCHAR(36) REFERENCES projects(id) ON DELETE CASCADE,
    user_id VARCHAR(36) REFERENCES auth_user(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, user_id)
);

-- Indexes and additional constraints
CREATE INDEX idx_projects_created_at ON projects(created_at);
CREATE INDEX idx_projects_comments_created_at ON projects_comments(created_at);
CREATE INDEX idx_projects_votes_created_at ON projects_votes(created_at);
