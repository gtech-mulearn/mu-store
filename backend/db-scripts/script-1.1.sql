-- Create table for Project
CREATE TABLE projects (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()), 
    logo VARCHAR(1000),
    title VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    link VARCHAR(200), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by CHAR(36),
    updated_by CHAR(36),
    FOREIGN KEY (created_by) REFERENCES auth_user(id) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES auth_user(id) ON DELETE SET NULL
);

-- Create table for ProjectImage
CREATE TABLE project_images (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()), 
    project_id CHAR(36) REFERENCES projects(id) ON DELETE CASCADE,
    image VARCHAR(1000), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table for Comment
CREATE TABLE projects_comments (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()), 
    comment TEXT NOT NULL,
    project_id CHAR(36) REFERENCES projects(id) ON DELETE CASCADE,
    user_id CHAR(36) REFERENCES auth_user(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by CHAR(36),
    updated_by CHAR(36),
    FOREIGN KEY (created_by) REFERENCES auth_user(id) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES auth_user(id) ON DELETE SET NULL
);

-- Create table for Vote
CREATE TABLE projects_votes (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()), 
    vote ENUM('upvote', 'downvote') NOT NULL,
    project_id CHAR(36) REFERENCES projects(id) ON DELETE CASCADE,
    user_id CHAR(36) REFERENCES auth_user(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by CHAR(36),
    updated_by CHAR(36),
    FOREIGN KEY (created_by) REFERENCES auth_user(id) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES auth_user(id) ON DELETE SET NULL
);

-- Create many-to-many relationship table for Project and User
CREATE TABLE projects_contributors (
    project_id CHAR(36) REFERENCES projects(id) ON DELETE CASCADE,
    user_id CHAR(36) REFERENCES auth_user(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, user_id)
);

-- Indexes and additional constraints
CREATE INDEX idx_projects_created_at ON projects(created_at);
CREATE INDEX idx_projects_comments_created_at ON projects_comments(created_at);
CREATE INDEX idx_projects_votes_created_at ON projects_votes(created_at);